// Get the selected node
const selectedNode = figma.currentPage.selection[0];

// Check if the selected node is a main component
if (selectedNode.type !== "COMPONENT" || selectedNode.parent.type !== "PAGE") {
  // Show an error message and abort
  figma.notify("Please select a main component on the page.");
  figma.closePlugin();
} else {
  // Duplicate the selected node
  const duplicatedNode = selectedNode.clone();

  // Add "copy" suffix to the name of the duplicated node
  duplicatedNode.name = selectedNode.name + " copy";

  // Add the duplicated node to the page
  figma.currentPage.appendChild(duplicatedNode);

  // Position the duplicated node 50px to the right of the original node
  duplicatedNode.x = selectedNode.x + selectedNode.width + 50;

  // Select the duplicated node
  figma.currentPage.selection = [duplicatedNode];

  // Focus the view on the duplicated node without zooming
  figma.viewport.scrollAndZoomIntoView([duplicatedNode], { x: 0.5, y: 0.5, zoom: 1 });

  // Close the plugin
  figma.closePlugin();
}