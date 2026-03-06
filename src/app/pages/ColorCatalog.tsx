import { useState } from 'react';
import { Palette, Droplets, Eye, Copy, RefreshCw } from 'lucide-react';

interface BaseColor {
  name: string;
  hex: string;
  rgb: { r: number; g: number; b: number };
  code: string;
}

interface MixedColor {
  baseColors: BaseColor[];
  ratios: number[];
  result: string;
  formula: string;
}

const baseColors: BaseColor[] = [
  // Reds
  { name: 'Crimson Red', hex: '#DC143C', rgb: { r: 220, g: 20, b: 60 }, code: 'CR-001' },
  { name: 'Fire Engine Red', hex: '#CE2029', rgb: { r: 206, g: 32, b: 41 }, code: 'FR-002' },
  { name: 'Maroon', hex: '#800000', rgb: { r: 128, g: 0, b: 0 }, code: 'MR-003' },
  { name: 'Burgundy', hex: '#800020', rgb: { r: 128, g: 0, b: 32 }, code: 'BG-004' },
  { name: 'Ruby Red', hex: '#E0115F', rgb: { r: 224, g: 17, b: 95 }, code: 'RR-005' },
  
  // Blues
  { name: 'Royal Blue', hex: '#4169E1', rgb: { r: 65, g: 105, b: 225 }, code: 'RB-006' },
  { name: 'Navy Blue', hex: '#000080', rgb: { r: 0, g: 0, b: 128 }, code: 'NB-007' },
  { name: 'Sky Blue', hex: '#87CEEB', rgb: { r: 135, g: 206, b: 235 }, code: 'SB-008' },
  { name: 'Teal Blue', hex: '#008080', rgb: { r: 0, g: 128, b: 128 }, code: 'TB-009' },
  { name: 'Cobalt Blue', hex: '#0047AB', rgb: { r: 0, g: 71, b: 171 }, code: 'CB-010' },
  
  // Greens
  { name: 'Forest Green', hex: '#228B22', rgb: { r: 34, g: 139, b: 34 }, code: 'FG-011' },
  { name: 'Lime Green', hex: '#32CD32', rgb: { r: 50, g: 205, b: 50 }, code: 'LG-012' },
  { name: 'Olive Green', hex: '#808000', rgb: { r: 128, g: 128, b: 0 }, code: 'OG-013' },
  { name: 'Mint Green', hex: '#98FF98', rgb: { r: 152, g: 255, b: 152 }, code: 'MG-014' },
  { name: 'Sage Green', hex: '#B2AC88', rgb: { r: 178, g: 172, b: 136 }, code: 'SG-015' },
  
  // Yellows/Oranges
  { name: 'Sunshine Yellow', hex: '#FFD700', rgb: { r: 255, g: 215, b: 0 }, code: 'SY-016' },
  { name: 'Golden Yellow', hex: '#FFDF00', rgb: { r: 255, g: 223, b: 0 }, code: 'GY-017' },
  { name: 'Burnt Orange', hex: '#FF8C00', rgb: { r: 255, g: 140, b: 0 }, code: 'BO-018' },
  { name: 'Tangerine', hex: '#F28500', rgb: { r: 242, g: 133, b: 0 }, code: 'TG-019' },
  { name: 'Amber', hex: '#FFBF00', rgb: { r: 255, g: 191, b: 0 }, code: 'AB-020' },
  
  // Purples/Pinks
  { name: 'Deep Purple', hex: '#663399', rgb: { r: 102, g: 51, b: 153 }, code: 'DP-021' },
  { name: 'Lavender', hex: '#E6E6FA', rgb: { r: 230, g: 230, b: 250 }, code: 'LV-022' },
  { name: 'Magenta', hex: '#FF00FF', rgb: { r: 255, g: 0, b: 255 }, code: 'MA-023' },
  { name: 'Coral Pink', hex: '#FF6B9D', rgb: { r: 255, g: 107, b: 157 }, code: 'CP-024' },
  { name: 'Rose Pink', hex: '#FF007F', rgb: { r: 255, g: 0, b: 127 }, code: 'RP-025' },
  
  // Neutrals
  { name: 'Midnight Black', hex: '#191970', rgb: { r: 25, g: 25, b: 112 }, code: 'MB-026' },
  { name: 'Pure White', hex: '#FFFFFF', rgb: { r: 255, g: 255, b: 255 }, code: 'PW-027' },
  { name: 'Steel Gray', hex: '#708090', rgb: { r: 112, g: 128, b: 144 }, code: 'SG-028' },
  { name: 'Charcoal Gray', hex: '#36454F', rgb: { r: 54, g: 69, b: 79 }, code: 'CG-029' },
  { name: 'Beige', hex: '#F5F5DC', rgb: { r: 245, g: 245, b: 220 }, code: 'BG-030' },
  { name: 'Cream', hex: '#FFFDD0', rgb: { r: 255, g: 253, b: 208 }, code: 'CR-031' },
  { name: 'Taupe', hex: '#483C32', rgb: { r: 72, g: 60, b: 50 }, code: 'TP-032' },
  { name: 'Ivory', hex: '#FFFFF0', rgb: { r: 255, g: 255, b: 240 }, code: 'IV-033' },
  
  // Browns
  { name: 'Chocolate Brown', hex: '#3B2F2F', rgb: { r: 59, g: 47, b: 47 }, code: 'CB-034' },
  { name: 'Copper', hex: '#B87333', rgb: { r: 184, g: 115, b: 51 }, code: 'CP-035' },
  { name: 'Bronze', hex: '#CD7F32', rgb: { r: 205, g: 127, b: 50 }, code: 'BZ-036' },
  { name: 'Sienna', hex: '#882D17', rgb: { r: 136, g: 45, b: 23 }, code: 'SN-037' },
  { name: 'Khaki', hex: '#C3B091', rgb: { r: 195, g: 176, b: 145 }, code: 'KK-038' },
];

export function ColorCatalog() {
  const [selectedColors, setSelectedColors] = useState<BaseColor[]>([]);
  const [ratios, setRatios] = useState<number[]>([]);
  const [mixedColors, setMixedColors] = useState<MixedColor[]>([]);
  const [copiedFormula, setCopiedFormula] = useState<string | null>(null);

  const addColorToMix = (color: BaseColor) => {
    if (selectedColors.length < 5) {
      setSelectedColors([...selectedColors, color]);
      setRatios([...ratios, 10]);
    }
  };

  const removeColorFromMix = (index: number) => {
    const newColors = selectedColors.filter((_, i) => i !== index);
    const newRatios = ratios.filter((_, i) => i !== index);
    setSelectedColors(newColors);
    setRatios(newRatios);
  };

  const updateRatio = (index: number, value: number) => {
    const newRatios = [...ratios];
    newRatios[index] = value;
    setRatios(newRatios);
  };

  const mixColors = () => {
    if (selectedColors.length === 0) return;

    let totalR = 0, totalG = 0, totalB = 0;
    let totalRatio = 0;

    selectedColors.forEach((color, index) => {
      const ratio = ratios[index] || 10;
      totalR += color.rgb.r * ratio;
      totalG += color.rgb.g * ratio;
      totalB += color.rgb.b * ratio;
      totalRatio += ratio;
    });

    const avgR = Math.round(totalR / totalRatio);
    const avgG = Math.round(totalG / totalRatio);
    const avgB = Math.round(totalB / totalRatio);

    const resultHex = `#${avgR.toString(16).padStart(2, '0')}${avgG.toString(16).padStart(2, '0')}${avgB.toString(16).padStart(2, '0')}`.toUpperCase();

    const formula = selectedColors.map((color, index) => 
      `${color.code} (${ratios[index]}%)`
    ).join(' + ');

    const mixedColor: MixedColor = {
      baseColors: [...selectedColors],
      ratios: [...ratios],
      result: resultHex,
      formula: formula
    };

    setMixedColors([mixedColor, ...mixedColors.slice(0, 9)]);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedFormula(text);
    setTimeout(() => setCopiedFormula(null), 2000);
  };

  const clearMix = () => {
    setSelectedColors([]);
    setRatios([]);
  };

  const getMixedColor = () => {
    if (selectedColors.length === 0) return '#FFFFFF';
    
    let totalR = 0, totalG = 0, totalB = 0;
    let totalRatio = 0;

    selectedColors.forEach((color, index) => {
      const ratio = ratios[index] || 10;
      totalR += color.rgb.r * ratio;
      totalG += color.rgb.g * ratio;
      totalB += color.rgb.b * ratio;
      totalRatio += ratio;
    });

    const avgR = Math.round(totalR / totalRatio);
    const avgG = Math.round(totalG / totalRatio);
    const avgB = Math.round(totalB / totalRatio);

    return `#${avgR.toString(16).padStart(2, '0')}${avgG.toString(16).padStart(2, '0')}${avgB.toString(16).padStart(2, '0')}`.toUpperCase();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Palette className="h-12 w-12 text-gray-900 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">Color Catalog</h1>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Mix and match colors to create your perfect shade. See the exact formulas and ratios used to achieve your desired color.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Color Selection Panel */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Base Colors</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {baseColors.map((color) => (
                  <div key={color.code} className="text-center">
                    <button
                      onClick={() => addColorToMix(color)}
                      className="w-full group relative overflow-hidden rounded-lg border-2 border-gray-200 hover:border-gray-400 transition-all"
                      disabled={selectedColors.length >= 5 && !selectedColors.find(c => c.code === color.code)}
                    >
                      <div 
                        className="h-20 w-full"
                        style={{ backgroundColor: color.hex }}
                      />
                      <div className="p-2 bg-white">
                        <p className="text-xs font-medium text-gray-900 truncate">{color.name}</p>
                        <p className="text-xs text-gray-500">{color.code}</p>
                      </div>
                      {selectedColors.find(c => c.code === color.code) && (
                        <div className="absolute inset-0 bg-blue-500 bg-opacity-20 flex items-center justify-center">
                          <span className="text-blue-600 font-semibold">Selected</span>
                        </div>
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mixing Panel */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-semibold text-gray-900">Color Mixer</h2>
                <button
                  onClick={clearMix}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                  title="Clear mix"
                >
                  <RefreshCw className="h-5 w-5" />
                </button>
              </div>

              {/* Preview */}
              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <Eye className="h-5 w-5 text-gray-600 mr-2" />
                  <span className="text-sm font-medium text-gray-700">Preview</span>
                </div>
                <div 
                  className="w-full h-24 rounded-lg border-2 border-gray-300 shadow-inner"
                  style={{ backgroundColor: getMixedColor() }}
                />
                <p className="text-center text-sm text-gray-600 mt-2 font-mono">{getMixedColor()}</p>
              </div>

              {/* Selected Colors */}
              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <Droplets className="h-5 w-5 text-gray-600 mr-2" />
                  <span className="text-sm font-medium text-gray-700">Selected Colors</span>
                </div>
                {selectedColors.length === 0 ? (
                  <p className="text-sm text-gray-500 italic">Select up to 5 colors to mix</p>
                ) : (
                  <div className="space-y-3">
                    {selectedColors.map((color, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div 
                          className="w-8 h-8 rounded border border-gray-300"
                          style={{ backgroundColor: color.hex }}
                        />
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900">{color.name}</p>
                          <p className="text-xs text-gray-500">{color.code}</p>
                        </div>
                        <input
                          type="number"
                          min="1"
                          max="100"
                          value={ratios[index] || 10}
                          onChange={(e) => updateRatio(index, parseInt(e.target.value) || 10)}
                          className="w-16 px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-600">%</span>
                        <button
                          onClick={() => removeColorFromMix(index)}
                          className="text-red-500 hover:text-red-700 transition-colors"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <button
                onClick={mixColors}
                disabled={selectedColors.length === 0}
                className="w-full bg-gray-900 text-white py-2 px-4 rounded-lg hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
              >
                Mix Colors
              </button>
            </div>
          </div>
        </div>

        {/* Mixed Colors History */}
        {mixedColors.length > 0 && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Color Creations</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {mixedColors.map((mixed, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow">
                  <div 
                    className="w-full h-20 rounded mb-3 border border-gray-300"
                    style={{ backgroundColor: mixed.result }}
                  />
                  <p className="text-sm font-mono text-gray-700 mb-2">{mixed.result}</p>
                  <p className="text-xs text-gray-600 mb-3">{mixed.formula}</p>
                  <button
                    onClick={() => copyToClipboard(mixed.formula)}
                    className="w-full flex items-center justify-center text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 py-1 px-2 rounded transition-colors"
                  >
                    <Copy className="h-3 w-3 mr-1" />
                    {copiedFormula === mixed.formula ? 'Copied!' : 'Copy Formula'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
