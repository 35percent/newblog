// Create root element
// https://www.amcharts.com/docs/v5/getting-started/#Root_element
var root = am5.Root.new("chartdiv");


// Set themes
// https://www.amcharts.com/docs/v5/concepts/themes/
root.setThemes([
  am5themes_Animated.new(root)
]);


// Create wrapper container
var container = root.container.children.push(am5.Container.new(root, {
  width: am5.percent(100),
  height: am5.percent(100),
  layout: root.verticalLayout
}));



var root = am5.Root.new("chartdiv");

root.setThemes([
  am5themes_Animated.new(root)
]);

var container = root.container.children.push(
  am5.Container.new(root, {
    width: am5.percent(100),
    height: am5.percent(100),
    layout: root.verticalLayout
  })
);

var series = container.children.push(
  am5hierarchy.ForceDirected.new(root, {
    downDepth: 1,
    initialDepth: 1,
    topDepth: 0,
    valueField: "value",
    categoryField: "name",
    childDataField: "children",
    xField: "x",
    yField: "y",
    minRadius: 30,
    manyBodyStrength: -40
  })
);

// Disable circles
series.circles.template.set("forceHidden", true);
series.outerCircles.template.set("forceHidden", true);

// ... except for central node
series.circles.template.adapters.add("forceHidden", function(forceHidden, target) {
  return target.dataItem.get("depth") == 0 ? false : forceHidden;
});

// Set up labels
series.labels.template.setAll({
  fill: am5.color(0x000000),
  y: 45,
  //y: am5.percent(10),
  oversizedBehavior: "none"
});

// Use adapter to leave central node label centered
series.labels.template.adapters.add("y", function(y, target) {
  return target.dataItem.get("depth") == 0 ? 0 : y;
});

// Use template.setup function to prep up node with an image
series.nodes.template.setup = function(target) {
  target.events.on("dataitemchanged", function(ev) {
    var icon = target.children.push(am5.Picture.new(root, {
      width: 70,
      height: 70,
      centerX: am5.percent(50),
      centerY: am5.percent(50),
      src: ev.target.dataItem.dataContext.image
    }));
  });
}

series.data.setAll([{
  name: "Browsers",
  x: am5.percent(50),
  y: am5.percent(50),
  children: [{
    name: "Chrome",
    value: 1,
    image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-160/icon_chrome.svg"
  }, {
    name: "Firefox",
    value: 1,
    image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-160/icon_firefox.svg"
  }, {
    name: "IE",
    value: 1,
    image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-160/icon_ie.svg"
  }, {
    name: "Safari",
    value: 1,
    image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-160/icon_safari.svg"
  }, {
    name: "Opera",
    value: 1,
    image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-160/icon_opera.svg"
  }]
}]);

series.set("selectedDataItem", series.dataItems[0]);



// Make stuff animate on load
series.appear(1000, 100);