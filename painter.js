let painter = {
    tools: ["brush", "roller", "caulk", "sandpaper", "dropcloth"],
    uniform: "white overalls",
    cost_per_hour: 25.00,
    insured: true,
    new_tools: (tool) => {
        painter.tools.push(tool)
    } 
  }

  painter.new_tools("hammer")
  console.log(painter.tools)
