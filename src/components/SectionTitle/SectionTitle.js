import PropTypes from 'prop-types';

export const SectionTitle = ({ title, children }) => {
  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

SectionTitle.protoType = {
  title: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
