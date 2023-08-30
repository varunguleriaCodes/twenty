import { IconButton } from '@/ui/button/components/IconButton';
import { IconPlus } from '@/ui/icon';

type OwnProps = {
  onClick: () => void;
};

export function PageAddButton({ onClick }: OwnProps) {
  return (
    <IconButton
      icon={<IconPlus size={16} />}
      size="medium"
      variant="secondary"
      data-testid="add-button"
      accent="default"
      onClick={onClick}
    />
  );
}
