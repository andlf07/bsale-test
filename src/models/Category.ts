import { DataTypes, Model, Sequelize, Optional } from 'sequelize';
import { ModelInitializer } from './ModelInitializer';

//This interface is indicating us wich are the field the category object will have.
export interface CategoryAttributes {
  id: number;
  name: string;
}

export interface CategoryCreationAttributes
  extends Optional<CategoryAttributes, 'id'> {}

export class Category extends Model<
  CategoryAttributes,
  CategoryCreationAttributes
> {
  public id!: number;
  public name!: string;
}

export class CategoryInitializer implements ModelInitializer {
  constructor(private client: Sequelize) {}
  initialize(): void {
    Category.init(
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
      },
      {
        tableName: 'category',
        timestamps: false,
        sequelize: this.client,
        modelName: 'category',
      },
    );
  }
}
