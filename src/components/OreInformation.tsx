
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Gem } from 'lucide-react';

interface OreInformationProps {
  oreName: string;
}

const OreInformation = ({ oreName }: OreInformationProps) => {
  const oreData: Record<string, {
    description: string;
    composition: string;
    properties: string[];
    uses: string[];
    color: string;
  }> = {
    Biotite: {
      description: "A dark mica mineral that is a common component of igneous and metamorphic rocks.",
      composition: "K(Mg,Fe)₃(AlSi₃O₁₀)(OH)₂",
      properties: ["Dark brown to black color", "Perfect cleavage", "Flexible sheets"],
      uses: ["Geological dating", "Industrial applications", "Decorative stone"],
      color: "from-gray-600 to-gray-800"
    },
    Bornite: {
      description: "A copper iron sulfide mineral known for its distinctive peacock-like tarnish colors.",
      composition: "Cu₅FeS₄",
      properties: ["Metallic luster", "Peacock tarnish", "High copper content"],
      uses: ["Primary copper ore", "Jewelry", "Decorative objects"],
      color: "from-purple-600 to-blue-800"
    },
    Chrysocolla: {
      description: "A hydrated copper cyclosilicate mineral known for its vibrant blue-green colors.",
      composition: "CuSiO₃·2H₂O",
      properties: ["Bright blue-green color", "Translucent to opaque", "Waxy luster"],
      uses: ["Gemstone", "Ornamental stone", "Minor copper ore"],
      color: "from-blue-500 to-green-600"
    },
    Malachite: {
      description: "A bright green copper carbonate mineral, often found with azurite in copper deposits.",
      composition: "Cu₂CO₃(OH)₂",
      properties: ["Bright green color", "Banded patterns", "Adamantine luster"],
      uses: ["Ornamental stone", "Pigment", "Minor copper ore"],
      color: "from-green-500 to-green-700"
    },
    Muscovite: {
      description: "A light-colored mica mineral commonly found in igneous and metamorphic rocks.",
      composition: "KAl₂(AlSi₃O₁₀)(OH)₂",
      properties: ["Silvery-white color", "Perfect cleavage", "Transparent sheets"],
      uses: ["Electrical insulation", "Decorative applications", "Industrial filler"],
      color: "from-gray-300 to-gray-500"
    },
    Pyrite: {
      description: "An iron sulfide mineral known as 'fool's gold' due to its metallic luster and pale brass-yellow hue.",
      composition: "FeS₂",
      properties: ["Metallic luster", "Brass-yellow color", "Cubic crystals"],
      uses: ["Sulfur production", "Historical gold substitute", "Jewelry"],
      color: "from-yellow-600 to-yellow-800"
    },
    Quartz: {
      description: "One of the most abundant minerals on Earth, composed of silicon dioxide.",
      composition: "SiO₂",
      properties: ["Glassy luster", "Hexagonal crystals", "High hardness"],
      uses: ["Electronics", "Jewelry", "Construction materials"],
      color: "from-gray-100 to-gray-400"
    }
  };

  const ore = oreData[oreName];

  if (!ore) {
    return null;
  }

  return (
    <Card className="bg-white/10 backdrop-blur-sm border-white/20">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <Gem className="h-5 w-5" />
          {oreName} Information
        </CardTitle>
        <CardDescription className="text-blue-200">
          Geological and chemical properties
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className={`p-4 rounded-lg bg-gradient-to-r ${ore.color} bg-opacity-20`}>
          <p className="text-blue-100 text-sm leading-relaxed">
            {ore.description}
          </p>
        </div>

        <div>
          <h4 className="text-white font-medium mb-2">Chemical Composition</h4>
          <Badge variant="secondary" className="bg-white/20 text-white font-mono">
            {ore.composition}
          </Badge>
        </div>

        <div>
          <h4 className="text-white font-medium mb-2">Key Properties</h4>
          <div className="flex flex-wrap gap-2">
            {ore.properties.map((property, index) => (
              <Badge key={index} variant="outline" className="border-blue-400 text-blue-200">
                {property}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-medium mb-2">Common Uses</h4>
          <div className="flex flex-wrap gap-2">
            {ore.uses.map((use, index) => (
              <Badge key={index} variant="secondary" className="bg-green-500/20 text-green-200">
                {use}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default OreInformation;
