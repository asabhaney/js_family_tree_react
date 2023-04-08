import React, { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import FamilyTree from 'js_family_tree'
import data from './data'

export default () => {
   const svgRef = useRef()

   useEffect(() => {
      const svg = d3.select(svgRef.current)
           .attr("width", document.body.offsetWidth)
           .attr("height", document.documentElement.clientHeight);

       // make family tree object
       let FT = new FamilyTree(data, svg);

       // draw family tree
       FT.draw();
   }, [])

   return (
      <svg ref={svgRef} />
   )
}
