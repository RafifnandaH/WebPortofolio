$(document).ready(function () {
  var entries = [
    { label: 'Programming' },
    { label: 'IIoT' },
    { label: 'Industrial Automation' },
    { label: 'Instrument' },
    { label: 'C/C++' },
    { label: 'Javascript' },
    { label: 'HTML' },
    { label: 'SCADA' },
    { label: 'Control Systems' },
    { label: 'PLC' },
    { label: 'DCS' },
    { label: 'CSS' },
    { label: 'Microcontrollers' },
    { label: 'Digital Manufacturing' },
    { label: 'NodeRed' },
    { label: 'Database Acquisition' },
    { label: 'Pneumatics' },
    { label: 'Hydraulics' },
    { label: 'Energy' },
    { label: 'Engineering' },
    { label: 'Embedded System' },
    
  ];

  var settings = {
    entries: entries,
    width: 680,
    height: 680,
    radius: '70%',
    radiusMin: 75,
    bgDraw: true,
    bgColor: '#fff',
    opacityOver: 2.0,
    opacityOut: 0.05,
    opacitySpeed: 6,
    fov: 800,
    speed: 0.4,
    fontSize: '20',
    fontColor: 'black',
    fontWeight: 'bold', //bold
    fontStyle: 'normal', //italic
    fontStretch: 'normal', //wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
    fontToUpperCase: true,
  };

  //var svg3DTagCloud = new SVG3DTagCloud( document.getElementById( 'holder'  ), settings );
  $('#holder').svg3DTagCloud(settings);
});
