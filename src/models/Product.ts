import
{
  Entity,
  Column,
  OneToMany,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
import ProductVariant from "./ProductVariant";

@Entity('product')
export default class Product extends BaseEntity
{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: "text", nullable: true })
  description: string;

  @Column({ type: "decimal", default: 0.0 })
  price: number;

  @Column({ default: 0 })
  inventory: number;

  @OneToMany(() => ProductVariant, variant => variant.product)
  variants: Array<ProductVariant>;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
