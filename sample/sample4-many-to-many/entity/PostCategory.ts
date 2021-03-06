import {PrimaryColumn, Column} from "../../../src/index";
import {Table} from "../../../src/index";

@Table("sample4_post_category")
export class PostCategory {

    @PrimaryColumn("int", { generated: true })
    id: number;

    @Column()
    name: string;

}