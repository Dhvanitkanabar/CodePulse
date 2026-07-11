import { Brain, ExternalLink } from 'lucide-react';
import Card from '@/components/ui/Card';
import { cn } from '@/utils';

export default function KnowledgeCard({ title, summary, tags = [], className }) {
  return (
    <Card hover className={cn('group', className)}>
      <Card.Header>
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-[#151515] border border-surface-700 text-white">
            <Brain size={18} />
          </div>
          <Card.Title className="text-base">{title || 'Knowledge Node'}</Card.Title>
        </div>
        <button className="opacity-0 group-hover:opacity-100 p-1.5 rounded-lg hover:bg-[#151515] text-surface-500 transition-all">
          <ExternalLink size={14} />
        </button>
      </Card.Header>
      <Card.Content>
        <p className="text-sm text-surface-400 line-clamp-3 mb-3">
          {summary || 'No summary available for this knowledge node.'}
        </p>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] px-2 py-0.5 rounded-full bg-transparent text-surface-300 border border-surface-700"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </Card.Content>
    </Card>
  );
}
