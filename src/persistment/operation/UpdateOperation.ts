import {ColumnMetadata} from "../../metadata/ColumnMetadata";
import {RelationMetadata} from "../../metadata/RelationMetadata";

/**
 */
export class UpdateOperation {
    constructor(public target: Function|string,
                public entity: any,
                public entityId: any,
                public columns: ColumnMetadata[],
                public relations: RelationMetadata[],
                public date = new Date()) {
    }
}