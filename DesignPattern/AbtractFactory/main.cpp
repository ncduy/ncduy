
#include "WindowsGUI.h"
#include "MacOSGUI.h"


int main()
{
    CMyButton* button = nullptr;
    CMyCheckbox* checkbox = nullptr;

    int nOsType = 1;
    if (nOsType == 1)
    {
        button = new CMyWindowsButton();
        checkbox = new CMyWindowsCheckbox();
    }
    else if (nOsType == 2)
    {
        button = new CMyMacOSButton();
        checkbox = new CMyMacOSCheckbox();
    }
    else
    {
        std::cout << "Unsupported OS!" << std::endl;
        return 1;
    }

    button->Render();
    checkbox->Render();

    delete button;
    delete checkbox;

    return 0;
}