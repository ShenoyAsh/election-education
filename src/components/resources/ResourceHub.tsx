import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { resources } from '@/lib/mock-data/resources';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/shared/Card';
import { Badge } from '@/components/shared/Badge';
import { Button } from '@/components/shared/Button';
import { ExternalLink, Heart, Shield, Languages, BookOpen } from 'lucide-react';
import { cn } from '@/lib/utils';

export const ResourceCard = ({ resource }: { resource: typeof resources[0] }) => {
  const [isSaved, setIsSaved] = useState(false);

  return (
    <Card hoverable className="flex flex-col">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="rounded-lg bg-primary/10 p-2 text-primary">
            <BookOpen className="h-6 w-6" />
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsSaved(!isSaved)}
            className={isSaved ? "text-red-500" : "text-text-muted"}
          >
            <Heart className={cn("h-5 w-5", isSaved && "fill-current")} />
          </Button>
        </div>
        <div className="mt-4 flex items-center gap-2">
          <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">
            <Shield className="mr-1 h-3 w-3" /> {resource.trustBadge}
          </Badge>
        </div>
        <CardTitle className="mt-2 text-lg">{resource.title}</CardTitle>
        <p className="text-sm font-medium text-text-secondary">{resource.organization}</p>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <p className="text-sm text-text-muted leading-relaxed">
          {resource.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {resource.languages.map((lang) => (
            <div key={lang} className="flex items-center gap-1 rounded bg-surface-2 px-2 py-0.5 text-[10px] text-text-secondary">
              <Languages className="h-2 w-2" /> {lang}
            </div>
          ))}
        </div>
      </CardContent>

      <CardFooter className="border-t border-border mt-auto">
        <Button variant="outline" className="w-full" onClick={() => window.open(resource.url, '_blank')}>
          Visit Site <ExternalLink className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export const ResourceHub = () => {
  const [filter, setFilter] = useState('all');
  
  const filteredResources = filter === 'all' 
    ? resources 
    : resources.filter(r => r.category === filter);

  const categories = ['all', 'government', 'registration', 'research', 'integrity', 'accessibility'];

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map((cat) => (
          <Button
            key={cat}
            variant={filter === cat ? 'primary' : 'outline'}
            size="sm"
            className="capitalize whitespace-nowrap rounded-full"
            onClick={() => setFilter(cat)}
          >
            {cat}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredResources.map((resource) => (
          <ResourceCard key={resource.id} resource={resource} />
        ))}
      </div>
    </div>
  );
};
