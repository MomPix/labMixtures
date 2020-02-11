import {IUseCase, Presenter} from '../arch';
import {Mixture} from '../entity/mixture';
import {MixtureRepository} from '../repository/mixture.repository';


export abstract class ShowMixtureListPresenter<T> extends Presenter<T> {

  public abstract displayMixtures(mixtures: Mixture[]): void;

}

export class ShowToDoListUseCase implements IUseCase<void, ShowMixtureListPresenter<any>> {

  constructor(public readonly presenter: ShowMixtureListPresenter<any>,
              private readonly repository: MixtureRepository,
  ) {
  }

  public async execute(request: void): Promise<void> {
    try {
      const allMixtures = await this.repository.getAllMixtures();
      this.presenter.displayMixtures(allMixtures);
    } catch (e) {
      console.error('Failed to load or present Mixtures: %o', e);
      throw e;
    }
  }
}
