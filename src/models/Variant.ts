
import
  {
    Entity,
    Column,
    ManyToOne,
    BaseEntity,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    PrimaryGeneratedColumn,
  } from "typeorm";
import Product from "./Product";

@Entity('variant')
export default class Variant extends BaseEntity
{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column("decimal")
  price: number;

  @ManyToOne(() => Product, product => product.variants)
  product: Product;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
