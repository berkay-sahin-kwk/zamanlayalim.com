import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, Calendar, Sparkles } from "lucide-react";
import timeAnalysisIcon from "@/assets/time-analysis-icon.jpg";

interface YearSelectorProps {
  onAnalyze: (year: string, amount: number) => void;
}

export const YearSelector = ({ onAnalyze }: YearSelectorProps) => {
  const [selectedYear, setSelectedYear] = useState<string>("");
  const [amount, setAmount] = useState<string>("200");

  const years = [];
  for (let year = 2000; year <= 2024; year++) {
    years.push(year.toString());
  }

  const handleAnalyze = () => {
    if (selectedYear && amount) {
      onAnalyze(selectedYear, parseFloat(amount));
    }
  };

  return (
    <div className="relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-2xl blur-3xl transform -rotate-1"></div>
      
      <Card className="relative w-full max-w-md mx-auto border-0 shadow-xl bg-white/80 backdrop-blur-sm animate-fade-in hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
        {/* Hero image */}
        <div className="relative h-32 overflow-hidden rounded-t-xl">
          <img 
            src={timeAnalysisIcon} 
            alt="Zaman analizi" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent"></div>
        </div>

        <CardHeader className="text-center pb-4">
          <CardTitle className="flex items-center justify-center gap-2 text-xl">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Calculator className="h-5 w-5 text-primary" />
            </div>
            Satın Alma Gücü Analizi
          </CardTitle>
          <CardDescription className="text-base">
            Geçmişte paranızın değerini keşfedin
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6 pt-0">
          {/* Data Type Selection */}
          <div className="space-y-3">
            <Label htmlFor="year" className="text-sm font-semibold flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary" />
              Yıl Seçin
            </Label>
            <Select value={selectedYear} onValueChange={setSelectedYear}>
              <SelectTrigger className="h-12 border-2 transition-all duration-200 hover:border-primary/30 focus:border-primary">
                <SelectValue placeholder="Bir yıl seçin" />
              </SelectTrigger>
              <SelectContent>
                {years.reverse().map((year) => (
                  <SelectItem key={year} value={year} className="hover:bg-primary/5">
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-3">
            <Label htmlFor="amount" className="text-sm font-semibold flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-primary" />
              Miktar (TL)
            </Label>
            <Input
              id="amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="200"
              min="1"
              className="h-12 border-2 text-lg font-medium transition-all duration-200 hover:border-primary/30 focus:border-primary"
            />
          </div>

          <Button 
            onClick={handleAnalyze} 
            className="w-full h-12 text-base font-semibold bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25" 
            disabled={!selectedYear || !amount}
          >
            <Calendar className="mr-2 h-5 w-5" />
            Analiz Et
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};