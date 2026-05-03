import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { electionMyths } from '@/lib/mock-data/myths';
import { Card, CardContent } from '@/components/shared/Card';
import { Badge } from '@/components/shared/Badge';
import { Search, AlertTriangle, CheckCircle, HelpCircle, Share2, ExternalLink } from 'lucide-react';
import { Button } from '@/components/shared/Button';

export const MythCard = ({ myth }: { myth: typeof electionMyths[0] }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const getRatingColor = (rating: string) => {
    switch (rating) {
      case 'false': return 'error';
      case 'misleading': return 'warning';
      case 'partly-true': return 'warning';
      default: return 'default';
    }
  };

  return (
    <div className="group h-[400px] w-full [perspective:1000px]">
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 260, damping: 20 }}
        className="relative h-full w-full transition-all [transform-style:preserve-3d]"
      >
        {/* Front - The Myth */}
        <div className="absolute inset-0 h-full w-full [backface-visibility:hidden]">
          <Card className="flex h-full flex-col justify-between border-2 border-dashed border-border p-8 text-center group-hover:border-primary/50">
            <div className="flex flex-col items-center">
              <div className="mb-6 rounded-full bg-error/10 p-4">
                <HelpCircle className="h-10 w-10 text-error" />
              </div>
              <Badge variant="error" className="mb-4">COMMON MYTH</Badge>
              <h3 className="text-xl font-bold italic leading-tight text-text-primary">
                "{myth.myth}"
              </h3>
            </div>
            <Button onClick={() => setIsFlipped(true)} variant="outline" className="w-full">
              Reveal the Fact
            </Button>
          </Card>
        </div>

        {/* Back - The Fact */}
        <div className="absolute inset-0 h-full w-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <Card className="flex h-full flex-col justify-between border-2 border-success/50 bg-success/[0.02] p-8">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Badge variant={getRatingColor(myth.rating)} className="uppercase">
                  {myth.rating}
                </Badge>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" className="h-8 w-8"><Share2 className="h-4 w-4" /></Button>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 shrink-0 text-success" />
                <p className="font-bold text-text-primary">{myth.fact}</p>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed">
                {myth.explanation}
              </p>
              <div className="pt-2">
                <p className="text-[10px] font-bold uppercase tracking-wider text-text-muted mb-2">Sources:</p>
                <div className="flex flex-wrap gap-2">
                  {myth.sources.map((source, i) => (
                    <a 
                      key={i} 
                      href={source.url} 
                      target="_blank" 
                      className="inline-flex items-center rounded-md bg-surface-2 px-2 py-1 text-[10px] hover:bg-border transition-colors"
                    >
                      {source.name} <ExternalLink className="ml-1 h-2 w-2" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <Button onClick={() => setIsFlipped(false)} variant="ghost" className="w-full text-xs underline">
              Back to Myth
            </Button>
          </Card>
        </div>
      </motion.div>
    </div>
  );
};

export const MythBuster = () => {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredMyths = electionMyths.filter(m => {
    const matchesSearch = m.myth.toLowerCase().includes(search.toLowerCase()) || 
                         m.fact.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === 'all' || m.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ['all', 'registration', 'voting-process', 'results', 'fraud'];

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-text-muted" />
          <input
            type="text"
            placeholder="Search election myths or facts..."
            className="w-full rounded-full border border-border bg-surface pl-10 pr-4 py-3 focus:ring-2 focus:ring-primary focus:outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={activeCategory === cat ? 'primary' : 'outline'}
              size="sm"
              className="capitalize rounded-full"
              onClick={() => setActiveCategory(cat)}
            >
              {cat.replace('-', ' ')}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredMyths.map((myth) => (
          <MythCard key={myth.id} myth={myth} />
        ))}
      </div>

      {filteredMyths.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <AlertTriangle className="h-12 w-12 text-warning mb-4" />
          <h3 className="text-xl font-bold">No results found</h3>
          <p className="text-text-muted">Try adjusting your search or category filters.</p>
        </div>
      )}
    </div>
  );
};
