export abstract class UpdateBaseDTO<E> implements Readonly<UpdateBaseDTO<E>> {
  abstract mergeWithEntity(entity: E): E;
}
