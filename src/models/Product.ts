import { DataTypes, Model, Sequelize, Optional } from 'sequelize';
import { ModelInitializer } from './ModelInitializer';

//This interface is indicating us wich are the field the Products object will have.
export interface ProductsAttributes {
  id?: number;
  name?: string;
  url_image?: string;
  price?: string;
  discount?: number;
  category?: number;
}

export interface ProductsCreationAttributes
  extends Optional<ProductsAttributes, 'id'> {}

export class Product extends Model<
  ProductsAttributes,
  ProductsCreationAttributes
> {
  public id!: number;
  public name!: string;
  public url_image!: string;
  public price!: string;
  public discount!: number;
  public category!: number;
}

export class ProductsInitializer implements ModelInitializer {
  constructor(private client: Sequelize) {}

  initialize(): void {
    Product.init(
      {
        id: {
          primaryKey: true,
          autoIncrement: true,
          type: DataTypes.INTEGER,
        },
        name: {
          allowNull: false,
          type: DataTypes.CHAR,
        },
        url_image: {
          allowNull: false,
          type: DataTypes.CHAR,
        },
        price: {
          allowNull: false,
          type: DataTypes.FLOAT,
        },
        discount: {
          allowNull: false,
          type: DataTypes.INTEGER,
        },
        category: {
          allowNull: false,
          type: DataTypes.INTEGER,
        },
      },
      {
        tableName: 'product',
        timestamps: false,
        sequelize: this.client,
        modelName: 'product',
      },
    );
  }
}
