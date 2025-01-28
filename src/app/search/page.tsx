import { Metadata } from 'next';
import { SearchContent } from './SearchContent';

export const metadata: Metadata = {
  title: 'Search Vaults',
  description: 'Search and explore Morpho vaults by address or name',
};

export default function SearchPage() {
  return <SearchContent />;
}
