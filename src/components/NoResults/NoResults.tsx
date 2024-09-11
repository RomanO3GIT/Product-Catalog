import './NoResults.scss';

type Props = {
  category: string;
};

export const NoResults: React.FC<Props> = ({ category }) => (
  <section>
    <h1>We are still working on {category} page. Please check back later.</h1>
  </section>
);
