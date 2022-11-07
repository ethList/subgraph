import { BigInt } from "@graphprotocol/graph-ts";
import { GeoNodeAdded } from "../generated/EthListDAO/EthListDAO";
import { Node } from "../generated/schema";
import { EthListNode as NodeTemplate } from "../generated/templates";

export function handleGeoNodeAdded(event: GeoNodeAdded): void {
  let node = new Node(event.params.node.toHex());
  node.path = event.params.name;
  node.isLeaf = false;
  node.name = event.params.name;
  node.tag = event.params.tag;
  node.childrenTag = event.params.childrenTag;
  node.index = BigInt.zero();
  node.createdAtBlockNumber = event.block.number;
  node.createdAtTimestamp = event.block.timestamp;
  node.save();

  NodeTemplate.create(event.params.node);
}
