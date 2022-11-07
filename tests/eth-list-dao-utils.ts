import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import {
  GeoNodeAdded,
  NewOwner,
  NewPendingOwner
} from "../generated/EthListDAO/EthListDAO"

export function createGeoNodeAddedEvent(
  node: Address,
  name: string,
  tag: string,
  childrenTag: string
): GeoNodeAdded {
  let geoNodeAddedEvent = changetype<GeoNodeAdded>(newMockEvent())

  geoNodeAddedEvent.parameters = new Array()

  geoNodeAddedEvent.parameters.push(
    new ethereum.EventParam("node", ethereum.Value.fromAddress(node))
  )
  geoNodeAddedEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  geoNodeAddedEvent.parameters.push(
    new ethereum.EventParam("tag", ethereum.Value.fromString(tag))
  )
  geoNodeAddedEvent.parameters.push(
    new ethereum.EventParam(
      "childrenTag",
      ethereum.Value.fromString(childrenTag)
    )
  )

  return geoNodeAddedEvent
}

export function createNewOwnerEvent(
  oldOwner: Address,
  newOwner: Address
): NewOwner {
  let newOwnerEvent = changetype<NewOwner>(newMockEvent())

  newOwnerEvent.parameters = new Array()

  newOwnerEvent.parameters.push(
    new ethereum.EventParam("oldOwner", ethereum.Value.fromAddress(oldOwner))
  )
  newOwnerEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return newOwnerEvent
}

export function createNewPendingOwnerEvent(
  oldPendingOwner: Address,
  newPendingOwner: Address
): NewPendingOwner {
  let newPendingOwnerEvent = changetype<NewPendingOwner>(newMockEvent())

  newPendingOwnerEvent.parameters = new Array()

  newPendingOwnerEvent.parameters.push(
    new ethereum.EventParam(
      "oldPendingOwner",
      ethereum.Value.fromAddress(oldPendingOwner)
    )
  )
  newPendingOwnerEvent.parameters.push(
    new ethereum.EventParam(
      "newPendingOwner",
      ethereum.Value.fromAddress(newPendingOwner)
    )
  )

  return newPendingOwnerEvent
}
