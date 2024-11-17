// scrollHelpers.js
export const scrollToEducation = (educationRef) => {
    if (educationRef.current) {
      educationRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  