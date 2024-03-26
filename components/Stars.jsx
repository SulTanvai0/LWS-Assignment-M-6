import Image from 'next/image';

const Stars = ({ rating }) => {
    const maxStars = 5;
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;

    const starElements = [];

    for (let i = 0; i < maxStars; i++) {
        if (i < fullStars) {
            starElements.push(<Image key={i} src="/assets/svg/star.svg" width={20} height={20} alt="Full star" />);
        } else if (hasHalfStar && i === fullStars) {
            starElements.push(<Image key={i} src="/assets/svg/star-half.svg" width={20} height={20} alt="Half star" />);
        }
    }

    return <div className="flex">{starElements}</div>;
};

export default Stars;
