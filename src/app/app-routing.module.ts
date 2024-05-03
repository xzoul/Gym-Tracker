import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {
        path: "",
        loadChildren: () =>
            import("./tabs/tabs.module").then((m) => m.TabsPageModule),
        // loadChildren: () =>
        //     import("./views/loader/loader.module").then(
        //         (m) => m.LoaderPageModule
        //     ),
    },
    {
        path: "loader",
        loadChildren: () =>
            import("./views/loader/loader.module").then(
                (m) => m.LoaderPageModule
            ),
    },  {
    path: 'index',
    loadChildren: () => import('./views/index/index.module').then( m => m.IndexPageModule)
  },

];
@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
