// TODO: DONE Let's split these models to the separate files

import {WebSitesModel} from "./web-sites.model";

export interface Filters {
  photo?: boolean
  stars?: string[]
  webSites?: WebSitesModel[]
}
