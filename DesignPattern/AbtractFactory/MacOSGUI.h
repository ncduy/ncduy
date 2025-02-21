#ifndef _MACOS_GUI_H_
#define _MACOS_GUI_H_

#include "Button.h"
#include "Checkbox.h"
#include <iostream>

// Concrete Product: MacOS Button
class CMyMacOSButton : public CMyButton
{
public:
    void Render() const override {std::cout << "Rendering MacOS Button" << std::endl;};
};

// Concrete Product: MacOS Checkbox
class CMyMacOSCheckbox : public CMyCheckbox {
public:
    void Render() const override {std::cout << "Rendering MacOS Checkbox" << std::endl;};
};

#endif // _MACOS_GUI_H_
