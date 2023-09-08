const SvgComponent = ({color, border, className}) => {
  
    return (
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 1900 1843"
          style={{ enableBackground: 'new 0 0 1900 1843' }}
          xmlSpace="preserve"
        >
          <style type="text/css">{`${className ? '.' + className : ".st0"} { fill: ${color}; stroke: ${
              border ? border : ''
            } }`}</style>
          <g>
            <path
              className={`${className ? className : "st0"}`}
              d="M1870.7,10.2h-675.6c-19.3,0-37.4,7.5-51.1,21.2L682.2,493.2V73.1c0-39.8-32.3-72.1-72.1-72.1h-535 C49.3,1,28.3,22,28.3,47.8V631c0,99.3,80.8,180,180,180h918.6c7.6,0,14.8-3,20.2-8.4l743.8-743.8c8.2-8.2,10.6-20.4,6.2-31.1 C1892.7,17.1,1882.3,10.2,1870.7,10.2z"
            />
            <path
              className={`${className ? className : "st0"}`}
              d="M1209.5,1050.1c-71.1-77.9-172.3-122.6-277.7-122.6H236.4c-130,0-235.7,105.7-235.7,235.7v604.4 c0,24.6,20,44.6,44.6,44.6h521.2c53.7,0,97.4-43.7,97.4-97.4v-454.5l523.9,523.9c37.3,37.3,86.9,57.9,139.7,57.9h437.7 c29.8,0,55.8-16.9,67.8-44.2c12-27.3,7-57.9-13.1-79.8C1667,1551,1366.9,1222.8,1209.5,1050.1z"
            />
          </g>
        </svg>
      );
}

export default SvgComponent;