
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Rocket } from 'lucide-react';

export default function ReferralsPage() {
  return (
    <div className="space-y-8 py-6 animate-in fade-in-50">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-headline font-bold tracking-tight">Refer & Earn</h1>
        <p className="text-muted-foreground text-lg max-w-2xl">
          Share your link and earn lead points when your friends sign up and subscribe. You both get rewarded!
        </p>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle className="font-headline flex items-center gap-2">
            <Rocket className="h-6 w-6 text-primary" />
            Coming Soon!
          </CardTitle>
          <CardDescription>
            Our referral program is getting ready for launch. Get ready to share your unique link and earn rewards.
          </CardDescription>
        </CardHeader>
        <CardContent>
            <div className="text-sm text-muted-foreground p-4 border rounded-lg bg-background/50">
                <h4 className="font-semibold text-foreground mb-2">How it will work:</h4>
                <ul className="list-disc list-inside space-y-2">
                    <li>You get <span className="font-semibold text-primary">5 points</span> when a friend signs up with your link.</li>
                    <li>When a referred user upgrades to a paid plan, <span className="font-semibold">you both receive the bonus points</span>:
                        <ul className="list-disc list-inside mt-1 ml-5">
                            <li>Starter Plan: <span className="font-semibold text-primary">20 points</span> each</li>
                            <li>Pro Plan: <span className="font-semibold text-primary">50 points</span> each</li>
                            <li>Agency Plan: <span className="font-semibold text-primary">100 points</span> each</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </CardContent>
      </Card>
    </div>
  );
}
