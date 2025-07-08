import { LikeButton } from "@/components/LikeButton";
import { Heart, Sparkles } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-bg flex flex-col items-center justify-center p-8">
      <div className="text-center mb-16 animate-fade-in">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Heart className="h-8 w-8 text-primary fill-current" />
          <h1 className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Like Button Animation
          </h1>
          <Sparkles className="h-8 w-8 text-primary fill-current" />
        </div>
      </div>

      <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-12 shadow-like border border-primary/10">
        <div className="text-center mb-8">
          <p className="text-muted-foreground">Click the heart button below</p>
        </div>

        <div className="flex justify-center">
          <LikeButton initialLikes={1247} size="lg" />
        </div>
      </div>
    </div>
  );
};

export default Index;
