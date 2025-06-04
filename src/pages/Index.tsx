
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Waves, Trophy, Users, Shield, CreditCard } from "lucide-react";
import { toast } from "sonner";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    answer: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.answer) {
      toast.error("Please fill in all fields");
      return;
    }

    if (!formData.email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission and redirect to payment
    try {
      // In a real implementation, you would validate the answer and create a Stripe checkout session
      toast.success("Entry submitted! Redirecting to payment...");
      
      // Simulate payment redirect
      setTimeout(() => {
        toast.info("Payment integration will be set up with Stripe");
        setIsSubmitting(false);
      }, 2000);
      
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Waves className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">Leisure Luck</h1>
            </div>
            <Badge variant="secondary" className="bg-blue-100 text-blue-800">
              Live Competition
            </Badge>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-green-100 text-green-800 border-green-200">
            🏆 Current Prize Draw
          </Badge>
          
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Win a Premium
            <span className="text-blue-600 block">Paddleboard</span>
          </h2>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Enter our skill-based competition for just £2 and you could win a top-of-the-range paddleboard worth £500+
          </p>

          {/* Hero Image - Couple Paddleboarding */}
          <div className="mb-12">
            <div className="relative rounded-2xl overflow-hidden max-w-4xl mx-auto shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img 
                src="/photo-1506905925346-21bda4d32df4" 
                alt="Couple enjoying paddleboarding together on beautiful water"
                className="w-full h-64 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Premium Paddleboard Experience</h3>
                <p className="text-white/90 text-lg">Professional Grade • Worth £500+</p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <Trophy className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">£500+</div>
                <div className="text-gray-600">Prize Value</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <Users className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">£2</div>
                <div className="text-gray-600">Entry Cost</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <Shield className="h-8 w-8 text-green-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">Legal</div>
                <div className="text-gray-600">Skill-Based</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Entry Form */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto max-w-2xl">
          <Card className="shadow-2xl border-0 bg-white">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl font-bold text-gray-900 mb-2">
                Enter the Competition
              </CardTitle>
              <CardDescription className="text-lg text-gray-600">
                Answer the skill question below and pay £2 to enter
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="mt-1"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-1"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                {/* Skill Question */}
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <Label htmlFor="answer" className="text-lg font-semibold text-blue-900 mb-3 block">
                    Skill Question: In what year was the paddleboard invented? *
                  </Label>
                  <Input
                    id="answer"
                    name="answer"
                    type="text"
                    value={formData.answer}
                    onChange={handleInputChange}
                    className="mt-2 bg-white"
                    placeholder="Enter the year (e.g., 1960)"
                    required
                  />
                  <p className="text-sm text-blue-700 mt-2">
                    💡 Hint: Think about when surfing culture really took off
                  </p>
                </div>

                {/* Entry Fee Info */}
                <div className="bg-gray-50 p-4 rounded-lg border">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <CreditCard className="h-5 w-5 text-gray-600" />
                      <span className="font-medium text-gray-900">Entry Fee</span>
                    </div>
                    <span className="text-2xl font-bold text-gray-900">£2.00</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    Secure payment processed by Stripe
                  </p>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 text-lg transition-colors duration-200"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      <span>Processing...</span>
                    </div>
                  ) : (
                    "Submit Entry & Pay £2"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Why Choose Leisure Luck?
          </h3>
          
          {/* Technical Paddleboard Image */}
          <div className="max-w-2xl mx-auto mb-12">
            <img 
              src="/photo-1544551763-46a013bb70d5" 
              alt="Professional paddleboard technical specifications"
              className="w-full h-48 md:h-64 object-cover rounded-xl shadow-lg"
            />
            <p className="text-center text-gray-600 mt-4 text-lg">
              Professional-grade paddleboard with premium construction and materials
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">100% Legal</h4>
              <p className="text-gray-600">Skill-based competition compliant with UK gambling laws</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CreditCard className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Secure Payments</h4>
              <p className="text-gray-600">All payments processed securely through Stripe</p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Trophy className="h-8 w-8 text-yellow-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Real Prizes</h4>
              <p className="text-gray-600">Genuine high-quality prizes delivered to winners</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Waves className="h-6 w-6" />
            <span className="text-xl font-bold">Leisure Luck</span>
          </div>
          <p className="text-gray-400 mb-4">
            Legal skill-based competitions with amazing prizes
          </p>
          <div className="text-sm text-gray-500">
            <p>© 2024 Leisure Luck. All rights reserved.</p>
            <p className="mt-2">
              This is a skill-based competition and not gambling. 
              Must be 18+ to enter. Terms & conditions apply.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
