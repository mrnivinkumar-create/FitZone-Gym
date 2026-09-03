import smtplib
import os
import logging
from email.mime.text import MIMEText

logger = logging.getLogger(__name__)

def send_contact_notification(first_name: str, last_name: str, email: str, message: str):
    contact_notification_email = os.getenv("CONTACT_NOTIFICATION_EMAIL")
    smtp_host = os.getenv("SMTP_HOST")
    smtp_port = os.getenv("SMTP_PORT")
    smtp_username = os.getenv("SMTP_USERNAME")
    smtp_password = os.getenv("SMTP_PASSWORD")
    smtp_from_email = os.getenv("SMTP_FROM_EMAIL")

    if not all([contact_notification_email, smtp_host, smtp_port, smtp_username, smtp_password, smtp_from_email]):
        logger.warning("Email configuration missing. Skipping email notification.")
        return

    subject = "New FitZone Customer Enquiry"
    body = f"""New customer enquiry received.

Name:
{first_name} {last_name}

Email:
{email}

Message:
{message}
"""
    msg = MIMEText(body)
    msg['Subject'] = subject
    msg['From'] = smtp_from_email
    msg['To'] = contact_notification_email

    try:
        server = smtplib.SMTP(smtp_host, int(smtp_port))
        server.starttls()
        server.login(smtp_username, smtp_password)
        server.send_message(msg)
        server.quit()
        logger.info("Successfully sent contact email notification.")
    except Exception as e:
        logger.error(f"Failed to send email notification: {e}")
