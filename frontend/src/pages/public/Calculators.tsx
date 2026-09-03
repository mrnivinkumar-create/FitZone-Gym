import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Calculator, AlertCircle } from 'lucide-react';

type Tab = 'bmi' | 'bmr' | 'tdee' | 'macros';

const Calculators = () => {
  const [activeTab, setActiveTab] = useState<Tab>('bmi');

  // Form State
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [activity, setActivity] = useState('1.2');

  const [calories, setCalories] = useState('');
  const [proteinPct, setProteinPct] = useState('30');
  const [carbPct, setCarbPct] = useState('40');
  const [fatPct, setFatPct] = useState('30');

  // Result & Error State
  const [result, setResult] = useState<{ main: string; label: string; desc?: string; details?: any[] } | null>(null);
  const [error, setError] = useState('');

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
    setResult(null);
    setError('');
  };

  const calculateBMI = (h: number, w: number) => {
    const hm = h / 100;
    const bmi = w / (hm * hm);
    
    let category = '';
    if (bmi < 18.5) category = 'Underweight';
    else if (bmi >= 18.5 && bmi <= 24.9) category = 'Normal Weight';
    else if (bmi >= 25 && bmi <= 29.9) category = 'Overweight';
    else category = 'Obese';

    setResult({
      main: bmi.toFixed(2),
      label: 'Your BMI',
      desc: `Category: ${category}`
    });
  };

  const calculateBMR = (h: number, w: number, a: number, g: string) => {
    // Mifflin-St Jeor equation
    let bmr = (10 * w) + (6.25 * h) - (5 * a);
    bmr = g === 'male' ? bmr + 5 : bmr - 161;
    return bmr;
  };

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setResult(null);

    try {
      if (activeTab === 'bmi') {
        const h = parseFloat(height);
        const w = parseFloat(weight);
        if (!h || !w || h <= 0 || w <= 0) throw new Error('Please enter valid height and weight greater than 0.');
        calculateBMI(h, w);
      } 
      else if (activeTab === 'bmr') {
        const h = parseFloat(height);
        const w = parseFloat(weight);
        const a = parseInt(age);
        if (!h || !w || !a || h <= 0 || w <= 0 || a <= 0) throw new Error('Please enter valid height, weight, and age greater than 0.');
        
        const bmr = calculateBMR(h, w, a, gender);
        setResult({
          main: bmr.toFixed(2),
          label: 'kcal / day',
          desc: 'Your Basal Metabolic Rate'
        });
      }
      else if (activeTab === 'tdee') {
        const h = parseFloat(height);
        const w = parseFloat(weight);
        const a = parseInt(age);
        if (!h || !w || !a || h <= 0 || w <= 0 || a <= 0) throw new Error('Please enter valid height, weight, and age greater than 0.');
        
        const bmr = calculateBMR(h, w, a, gender);
        const tdee = bmr * parseFloat(activity);
        
        setResult({
          main: Math.round(tdee).toString(),
          label: 'kcal / day',
          desc: 'Total Daily Energy Expenditure'
        });
      }
      else if (activeTab === 'macros') {
        const cals = parseFloat(calories);
        const p = parseFloat(proteinPct);
        const c = parseFloat(carbPct);
        const f = parseFloat(fatPct);

        if (!cals || cals <= 0) throw new Error('Please enter valid daily calories.');
        if (p < 0 || c < 0 || f < 0) throw new Error('Percentages cannot be negative.');
        if (p + c + f !== 100) throw new Error(`Percentages must add up to exactly 100%. Currently: ${p + c + f}%`);

        const proteinGrams = (cals * (p / 100)) / 4;
        const carbGrams = (cals * (c / 100)) / 4;
        const fatGrams = (cals * (f / 100)) / 9;

        setResult({
          main: Math.round(cals).toString(),
          label: 'Daily Calories',
          desc: 'Your personalized macronutrient breakdown',
          details: [
            { label: 'Protein', val: `${Math.round(proteinGrams)}g`, color: 'text-blue-500' },
            { label: 'Carbs', val: `${Math.round(carbGrams)}g`, color: 'text-green-500' },
            { label: 'Fat', val: `${Math.round(fatGrams)}g`, color: 'text-yellow-500' }
          ]
        });
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred during calculation.');
    }
  };

  return (
    <div className="bg-zinc-950 min-h-screen pt-12 pb-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold uppercase text-white tracking-tight"
          >
            Fitness <span className="text-orange-500">Calculators</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-xl text-zinc-400"
          >
            Track your metrics and plan your nutrition precisely.
          </motion.p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl">
          <div className="flex border-b border-zinc-800 overflow-x-auto hide-scrollbar">
            {['BMI', 'BMR', 'TDEE', 'Macros'].map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab.toLowerCase() as Tab)}
                className={`flex-1 py-4 px-4 sm:px-6 text-sm font-bold uppercase tracking-wider whitespace-nowrap transition-colors ${
                  activeTab === tab.toLowerCase() ? 'bg-orange-500 text-white' : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
                }`}
              >
                {tab} Calculator
              </button>
            ))}
          </div>
          
          <div className="p-6 md:p-8">
            <div className="max-w-md mx-auto">
              <div className="mb-8 text-center">
                <Calculator className="h-10 w-10 text-orange-500 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-white uppercase">{activeTab} Calculator</h2>
              </div>

              <form onSubmit={handleCalculate} className="space-y-6">
                {/* Error Message */}
                <AnimatePresence>
                  {error && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="bg-red-500/10 border border-red-500/50 rounded-lg p-4 flex items-center gap-3 text-red-500 text-sm font-medium"
                    >
                      <AlertCircle className="h-5 w-5 shrink-0" />
                      <p>{error}</p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Common Height/Weight inputs for BMI, BMR, TDEE */}
                {['bmi', 'bmr', 'tdee'].includes(activeTab) && (
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">Height (cm)</label>
                      <input 
                        type="number" 
                        step="0.1"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        className="w-full rounded-md bg-zinc-950 border border-zinc-800 px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors" 
                        placeholder="175" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">Weight (kg)</label>
                      <input 
                        type="number" 
                        step="0.1"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        className="w-full rounded-md bg-zinc-950 border border-zinc-800 px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors" 
                        placeholder="70" 
                      />
                    </div>
                  </div>
                )}
                
                {/* Age & Gender for BMR, TDEE */}
                {['bmr', 'tdee'].includes(activeTab) && (
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">Age</label>
                      <input 
                        type="number" 
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        className="w-full rounded-md bg-zinc-950 border border-zinc-800 px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors" 
                        placeholder="25" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">Gender</label>
                      <select 
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        className="w-full rounded-md bg-zinc-950 border border-zinc-800 px-4 py-3 text-white focus:outline-none focus:border-orange-500"
                      >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* Activity Level for TDEE */}
                {activeTab === 'tdee' && (
                  <div>
                    <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">Activity Level</label>
                    <select 
                      value={activity}
                      onChange={(e) => setActivity(e.target.value)}
                      className="w-full rounded-md bg-zinc-950 border border-zinc-800 px-4 py-3 text-white focus:outline-none focus:border-orange-500"
                    >
                      <option value="1.2">Sedentary (Little/No Exercise)</option>
                      <option value="1.375">Lightly Active (1-3 days/week)</option>
                      <option value="1.55">Moderately Active (3-5 days/week)</option>
                      <option value="1.725">Very Active (6-7 days/week)</option>
                      <option value="1.9">Extra Active (Very Hard Exercise)</option>
                    </select>
                  </div>
                )}

                {/* Macros specific inputs */}
                {activeTab === 'macros' && (
                  <>
                    <div>
                      <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">Daily Calories</label>
                      <input 
                        type="number" 
                        value={calories}
                        onChange={(e) => setCalories(e.target.value)}
                        className="w-full rounded-md bg-zinc-950 border border-zinc-800 px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors" 
                        placeholder="e.g. 2500" 
                      />
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">Protein %</label>
                        <input 
                          type="number" 
                          value={proteinPct}
                          onChange={(e) => setProteinPct(e.target.value)}
                          className="w-full rounded-md bg-zinc-950 border border-zinc-800 px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors" 
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">Carbs %</label>
                        <input 
                          type="number" 
                          value={carbPct}
                          onChange={(e) => setCarbPct(e.target.value)}
                          className="w-full rounded-md bg-zinc-950 border border-zinc-800 px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors" 
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">Fat %</label>
                        <input 
                          type="number" 
                          value={fatPct}
                          onChange={(e) => setFatPct(e.target.value)}
                          className="w-full rounded-md bg-zinc-950 border border-zinc-800 px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors" 
                        />
                      </div>
                    </div>
                  </>
                )}

                <button type="submit" className="w-full rounded-md bg-orange-500 py-4 font-bold text-white hover:bg-orange-400 transition-colors">
                  CALCULATE
                </button>
              </form>

              {/* Animated Result Section */}
              <AnimatePresence>
                {result && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="mt-8 bg-zinc-950 border border-orange-500/30 rounded-xl p-6 text-center shadow-[0_0_15px_rgba(249,115,22,0.1)]"
                  >
                    <p className="text-zinc-400 text-sm font-bold uppercase tracking-wider mb-2">{result.label}</p>
                    <div className="text-4xl md:text-5xl font-extrabold text-white mb-2">
                      {result.main}
                    </div>
                    {result.desc && <p className="text-orange-500 font-medium mb-4">{result.desc}</p>}
                    
                    {/* Additional macro details if present */}
                    {result.details && (
                      <div className="grid grid-cols-3 gap-2 mt-6 pt-6 border-t border-zinc-800">
                        {result.details.map((d, i) => (
                          <div key={i} className="text-center">
                            <p className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-1">{d.label}</p>
                            <p className={`text-xl font-bold ${d.color}`}>{d.val}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculators;