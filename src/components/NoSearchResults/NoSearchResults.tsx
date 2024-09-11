import './NoSearchResults.scss';

type Props = {
  category: string;
};

export const NoSearchResults: React.FC<Props> = ({ category }) => (
  <section>
    <h1>We are still working on {category} page. Please check back later.</h1>
  </section>
);
