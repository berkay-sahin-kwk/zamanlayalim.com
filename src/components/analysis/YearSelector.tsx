import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, Calendar } from "lucide-react";

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
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-2">
          <Calculator className="h-5 w-5" />
          Satın Alma Gücü Analizi
        </CardTitle>
        <CardDescription>
          Geçmişte paranızın değerini keşfedin
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="year">Yıl Seçin</Label>
          <Select value={selectedYear} onValueChange={setSelectedYear}>
            <SelectTrigger>
              <SelectValue placeholder="Bir yıl seçin" />
            </SelectTrigger>
            <SelectContent>
              {years.reverse().map((year) => (
                <SelectItem key={year} value={year}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="amount">Miktar (TL)</Label>
          <Input
            id="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="200"
            min="1"
          />
        </div>

        <Button 
          onClick={handleAnalyze} 
          className="w-full" 
          disabled={!selectedYear || !amount}
        >
          <Calendar className="mr-2 h-4 w-4" />
          Analiz Et
        </Button>
      </CardContent>
    </Card>
  );
};