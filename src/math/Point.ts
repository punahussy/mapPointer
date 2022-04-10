export interface Point {
    x: number;
    y: number;
    name?: string | null;
}

export function add(a: Point, b: Point): Point {
    return {x: a.x + b.x, y: a.y + b.y};
}