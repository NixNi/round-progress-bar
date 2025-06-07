class CirlceProgress {
  constructor() {
    this.radius = 45;
    this.viewbox = 100;
    this.circleWidth = 8;
    this.animate = false;
    this.hidden = false;
    this.strokeDashArray = Math.PI * 2 * this.radius;

    const svgContainer = document.createElement('div');
    svgContainer.className = 'svg-container';

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.classList.add('circle-progress');
    svg.setAttribute('viewBox', `0 0 ${this.viewbox} ${this.viewbox}`);

    const circleBg = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circleBg.classList.add('circle-progress_circle');
    circleBg.setAttribute('r', this.radius);
    circleBg.setAttribute('cx', this.viewbox / 2);
    circleBg.setAttribute('cy', this.viewbox / 2);
    circleBg.setAttribute('stroke-width', this.circleWidth);

    const circleStroke = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circleStroke.classList.add('circle-progress_stroke');
    circleStroke.setAttribute('r', this.radius);
    circleStroke.setAttribute('cx', this.viewbox / 2);
    circleStroke.setAttribute('cy', this.viewbox / 2);
    circleStroke.setAttribute('stroke-width', this.circleWidth);
    circleStroke.setAttribute('stroke-dashoffset', this.strokeDashArray);
    circleStroke.setAttribute('stroke-dasharray', this.strokeDashArray);

    svg.appendChild(circleBg);
    svg.appendChild(circleStroke);
    svgContainer.appendChild(svg);

    this.svg = svg;
    this.svgContainer = svgContainer;
    this.circleStroke = circleStroke;
  }
  getElement() {
    return this.svgContainer;
  }
  setProgress(num) {
    this.circleStroke.setAttribute('stroke-dashoffset', this.strokeDashArray * ((100 - num) / 100));
  }
  setAnimate(state) {
    this.animate = state;
    if (state)
      this.svg.classList.add("animate");
    else  
      this.svg.classList.remove("animate")
  }
  setHidden(state) {
    this.hidden = state;
    this.svgContainer.hidden = state;
  }
}

export default CirlceProgress;