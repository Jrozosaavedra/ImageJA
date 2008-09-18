// Run this one line script and the main ImageJ window
// will always be on top of other windows.
//
// To test it, copy the last line in this file to the clipboard, switch to ImageJ,
// type shift+n (File>New>Text Window), type ctrl+v (Edit>Paste),
// then type ctrl-j (Macros>Evaluate Javascript). Use the
// Edit>Zap Gremlins command if you get an "illegal character" error.
//
// To create an "Always on Top" command, save this script in the plugins
// folder as "Always_on_Top.js", restart ImageJ and there will be a new 
// "Always on Top" command in the Plugins menu.
//
// To have ImageJ run the "Always on Top" command when it launches, add
// the following to the beginning of the ImageJ/macros/StartupMacros.txt file:
//
//   macro "AutoRun" {
//      run("Always on Top");
//  }

  IJ.getInstance().setAlwaysOnTop(true);