export declare class Repository<T extends {
    id: number;
}> {
    private items;
    add(item: T): void;
    getById(id: number): T | undefined;
    update(id: number, changes: Partial<Omit<T, "id">>): T | undefined;
    remove(id: number): boolean;
    filter(predicate: (item: T) => boolean): T[];
}
//# sourceMappingURL=repository.d.ts.map