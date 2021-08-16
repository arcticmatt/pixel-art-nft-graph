// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class MarketItem extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save MarketItem entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save MarketItem entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("MarketItem", id.toString(), this);
  }

  static load(id: string): MarketItem | null {
    return store.get("MarketItem", id) as MarketItem | null;
  }

  get creator(): Bytes {
    let value = this.get("creator");
    return value.toBytes();
  }

  set creator(value: Bytes) {
    this.set("creator", Value.fromBytes(value));
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get itemId(): BigInt {
    let value = this.get("itemId");
    return value.toBigInt();
  }

  set itemId(value: BigInt) {
    this.set("itemId", Value.fromBigInt(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get price(): BigInt {
    let value = this.get("price");
    return value.toBigInt();
  }

  set price(value: BigInt) {
    this.set("price", Value.fromBigInt(value));
  }

  get seller(): Bytes {
    let value = this.get("seller");
    return value.toBytes();
  }

  set seller(value: Bytes) {
    this.set("seller", Value.fromBytes(value));
  }

  get sold(): boolean {
    let value = this.get("sold");
    return value.toBoolean();
  }

  set sold(value: boolean) {
    this.set("sold", Value.fromBoolean(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get tokenUri(): string {
    let value = this.get("tokenUri");
    return value.toString();
  }

  set tokenUri(value: string) {
    this.set("tokenUri", Value.fromString(value));
  }

  get previousSellers(): Array<Bytes> | null {
    let value = this.get("previousSellers");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytesArray();
    }
  }

  set previousSellers(value: Array<Bytes> | null) {
    if (value === null) {
      this.unset("previousSellers");
    } else {
      this.set("previousSellers", Value.fromBytesArray(value as Array<Bytes>));
    }
  }
}

export class Transaction extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Transaction entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Transaction entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Transaction", id.toString(), this);
  }

  static load(id: string): Transaction | null {
    return store.get("Transaction", id) as Transaction | null;
  }

  get from(): Bytes {
    let value = this.get("from");
    return value.toBytes();
  }

  set from(value: Bytes) {
    this.set("from", Value.fromBytes(value));
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get itemId(): BigInt {
    let value = this.get("itemId");
    return value.toBigInt();
  }

  set itemId(value: BigInt) {
    this.set("itemId", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get to(): Bytes {
    let value = this.get("to");
    return value.toBytes();
  }

  set to(value: Bytes) {
    this.set("to", Value.fromBytes(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get type(): string | null {
    let value = this.get("type");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set type(value: string | null) {
    if (value === null) {
      this.unset("type");
    } else {
      this.set("type", Value.fromString(value as string));
    }
  }
}
