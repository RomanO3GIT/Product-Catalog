import './NoSearchResults.scss';

type Props = {
  category: string;
};

export const NoSearchResults: React.FC<Props> = ({ category }) => (
  <section>
    <h1>{`There are no ${category} matching the criteria`}</h1>
    <p>We are still working on this page. Please check back later.</p>
  </section>
);
