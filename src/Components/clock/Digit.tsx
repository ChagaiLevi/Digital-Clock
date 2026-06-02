import { DIGIT_SEGMENTS, SEGMENT_NAMES, type SegmentName } from "../../lib/sevenSegmentMaps";

type DigitProps = {
  num: number | null;
  small?: boolean;
};

const Digit = ({ num, small = false }: DigitProps) => {
  const activeSegments = num === null ? [] : DIGIT_SEGMENTS[num] ?? [];
  const prefix = small ? "small-" : "";

  const getSegmentClassName = (segmentName: SegmentName) => {
    const onClassName = activeSegments.includes(segmentName) ? `${prefix}on` : "";

    return `${prefix}segment ${segmentName} ${onClassName}`;
  };

  return (
    <div className={`${prefix}digit`}>
      {SEGMENT_NAMES.map((segmentName) => (
        <div key={segmentName} className={getSegmentClassName(segmentName)}></div>
      ))}
    </div>
  );
};

export default Digit;
