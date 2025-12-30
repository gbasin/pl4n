import { describe, expect, it } from "bun:test";

import { ADJECTIVES, NOUNS, generateName, generateUniqueName } from "../src/names";

describe("generateName", () => {
  it("returns adjective-noun", () => {
    const name = generateName();
    const parts = name.split("-");
    expect(parts.length).toBe(2);
  });

  it("uses defined vocabulary", () => {
    for (let i = 0; i < 50; i += 1) {
      const name = generateName();
      const [adj, noun] = name.split("-");
      expect(ADJECTIVES.includes(adj)).toBe(true);
      expect(NOUNS.includes(noun)).toBe(true);
    }
  });
});

describe("generateUniqueName", () => {
  it("avoids collisions", () => {
    const existing = new Set(["swift-river", "calm-meadow", "bold-peak"]);
    for (let i = 0; i < 20; i += 1) {
      const name = generateUniqueName(existing);
      expect(existing.has(name)).toBe(false);
    }
  });

  it("falls back when collisions likely", () => {
    const existing = new Set<string>();
    for (let i = 0; i < 100; i += 1) {
      existing.add(generateName());
    }
    const name = generateUniqueName(existing);
    expect(existing.has(name)).toBe(false);
  });

  it("falls back with a suffix after repeated collisions", () => {
    const originalRandom = Math.random;
    const originalUUID = crypto.randomUUID;
    Math.random = () => 0;
    crypto.randomUUID = () => "abcd0000-0000-0000-0000-000000000000";

    try {
      const base = `${ADJECTIVES[0]}-${NOUNS[0]}`;
      const existing = new Set([base]);
      const name = generateUniqueName(existing);
      expect(name).toBe(`${base}-abcd`);
    } finally {
      Math.random = originalRandom;
      crypto.randomUUID = originalUUID;
    }
  });
});

describe("vocabulary sizes", () => {
  it("is large enough", () => {
    expect(ADJECTIVES.length).toBeGreaterThanOrEqual(100);
    expect(NOUNS.length).toBeGreaterThanOrEqual(100);
    expect(ADJECTIVES.length * NOUNS.length).toBeGreaterThanOrEqual(10000);
  });
});
