import { LETTER_SEGMENTS, SEGMENT_NAMES, type SegmentName } from "../../lib/sevenSegmentMaps";

type SignalProps = {
  signal: string | null;
  isMeridiem?: boolean;
};

const Signal = ({ signal, isMeridiem = false }: SignalProps) => {
  const prefix = isMeridiem ? "" : "small-";
  const activeSegments = signal === null ? [] : LETTER_SEGMENTS[signal] ?? [];
  const activeClassName = `${prefix}on`;
  const filledSegmentClassName = `${prefix}segment ${activeClassName}`;

  const getSegmentClassName = (segmentName: SegmentName) => {
    const onClassName = activeSegments.includes(segmentName) ? activeClassName : "";

    return `${prefix}segment ${segmentName} ${onClassName}`;
  };

  return (
    <>
      <div className={`${prefix}digit`}>
        {signal === "T" || signal === "I" ? (
          <>
            <div className={`${filledSegmentClassName} a`} style={{ height: 3, width: 17 }}></div>
            <div
              className={`${filledSegmentClassName} b`}
              style={{ paddingRight: "unset", marginRight: 8, marginTop: 2, borderRightWidth: 8 }}
            ></div>
            <div className={`${filledSegmentClassName} c`} style={{ marginRight: 8 }}></div>
            {signal === "I" && <div className={`${filledSegmentClassName} d`} style={{ marginRight: 8 }}></div>}
          </>
        ) : (
          SEGMENT_NAMES.map((segmentName) => (
            <div key={segmentName} className={getSegmentClassName(segmentName)}></div>
          ))
        )}
        {signal === "R" && <div className="small-segment diag small-on"></div>}
      </div>

      {signal === "M" && (
        <div className="expansion2">
          <div className={`${filledSegmentClassName} a ${isMeridiem ? "meridiem" : "expansion"}`}></div>
          <div className={`${filledSegmentClassName} e`}></div>
          <div className={`${filledSegmentClassName} f ${isMeridiem ? "meridiem2" : ""}`}></div>
        </div>
      )}
      {signal === "W" && (
        <div className="expansion2">
          <div className="small-segment a expansion"></div>
          <div className="small-segment d small-on expansion"></div>
          <div className="small-segment e small-on"></div>
          <div className="small-segment f small-on"></div>
        </div>
      )}
    </>
  );
};

export default Signal;
