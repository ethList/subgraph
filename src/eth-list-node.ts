import { ChildAdded } from "../generated/templates/EthListNode/EthListNode";
import { Node } from "../generated/schema";
import { EthListNode as NodeTemplate } from "../generated/templates";

export function handleChildAdded(event: ChildAdded): void {
  let node = new Node(event.params.child.toHex());
  node.isLeaf = false;
  node.parent = event.params.parent.toHex();
  node.name = event.params.name;
  node.tag = event.params.childrenTag;
  node.childrenTag = event.params.grandchildrenTag;
  node.index = event.params.id;
  node.createdAtBlockNumber = event.block.number;
  node.createdAtTimestamp = event.block.timestamp;

  let parentNode = Node.load(event.params.parent.toHex()) as Node;
  node.path = parentNode.path.concat("-").concat(node.name);

  node.save();

  NodeTemplate.create(event.params.child);
}
