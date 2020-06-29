import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "home",
    loadChildren: () =>
      import("./home/home.module").then((m) => m.HomePageModule),
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "intro",
    loadChildren: () =>
      import("./pages/intro/intro.module").then((m) => m.IntroPageModule),
  },
  {
    path: "signup",
    loadChildren: () =>
      import("./pages/signup/signup.module").then((m) => m.SignupPageModule),
  },
  {
    path: "signin",
    loadChildren: () =>
      import("./pages/signin/signin.module").then((m) => m.SigninPageModule),
  },
  {
    path: "physical",
    loadChildren: () =>
      import("./pages/physical/physical.module").then(
        (m) => m.PhysicalPageModule
      ),
  },
  {
    path: "fitnesslevel",
    loadChildren: () =>
      import("./pages/fitnesslevel/fitnesslevel.module").then(
        (m) => m.FitnesslevelPageModule
      ),
  },
  {
    path: "fitnessgoal",
    loadChildren: () =>
      import("./pages/fitnessgoal/fitnessgoal.module").then(
        (m) => m.FitnessgoalPageModule
      ),
  },
  {
    path: "emoji",
    loadChildren: () =>
      import("./pages/emoji/emoji.module").then((m) => m.EmojiPageModule),
  },
  {
    path: "profile/:id",
    loadChildren: () =>
      import("./pages/profile/profile.module").then((m) => m.ProfilePageModule),
  },
  {
    path: "addmeal",
    loadChildren: () =>
      import("./modals/addmeal/addmeal.module").then(
        (m) => m.AddmealPageModule
      ),
  },
  {
    path: "newweight",
    loadChildren: () =>
      import("./pages/newweight/newweight.module").then(
        (m) => m.NewweightPageModule
      ),
  },
  {
    path: "newgoal",
    loadChildren: () =>
      import("./pages/newgoal/newgoal.module").then((m) => m.NewgoalPageModule),
  },
  {
    path: "newpicture",
    loadChildren: () =>
      import("./pages/newpicture/newpicture.module").then(
        (m) => m.NewpicturePageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
