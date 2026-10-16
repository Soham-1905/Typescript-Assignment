export class Repository<T extends {id : number}>{
    private items: T[] = [];

    add(item: T): void{
        this.items.push(item);
    }
    
    getById(id: number): T | undefined{
        let item = this.items.find(item => item.id ===id);
        return item;
    }

    update(id:number, changes: Partial<Omit<T, "id">>):T | undefined{
        const item = this.getById(id);
        if (item === undefined){
            return undefined;
        }
        Object.assign(item, changes);
        return item;
    }

    remove(id: number): boolean{
        const index = this.items.findIndex(item => item.id === id);
        if (index === -1){
            return false;
        }
        this.items.splice(index, 1);
        return true;
    }

    filter(predicate: (item: T)=> boolean):T[]{
        const filteredItems = this.items.filter(predicate);
        return filteredItems;
    }
}