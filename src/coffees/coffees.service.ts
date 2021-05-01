import { HttpException, HttpStatus, Injectable, NotFoundException } from "@nestjs/common";
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
  private coffees: Coffee = [
    {
      id: 1,
      name: 'some name',
      brand: 'some brand',
      flavors: ['name1', 'name2'],
    },
  ];

  findAll() {
    return this.coffees;
  }

  findOne(id: string) {
    throw 'A random error';
    const coffee = this.coffees.find((item) => item.id === +id);
    if (!coffee) {
      throw new NotFoundException(`Coffee #${id} not found`);
    }
    return coffee;
  }

  create(createCoffeeDto: any) {
    this.coffees.push(createCoffeeDto);
  }

  update(id: string, updateCoffeeDto: any) {
    const existingCoffee = this.findOne(id);
    if (existingCoffee) {
      // return existingCoffee;
    }
  }

  remove(id: string) {
    const existingCofee = this.findOne(id);
    return this.coffees.remove(existingCofee);
  }
}
