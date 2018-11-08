function tinhCV(r)
{
	if (r>0)
		chuVi.value =  2 * r * Math.PI;
	else
		alert("Bán kính không hợp lệ");
}
function tinhDT(r)
{
	if (r>0)
		dienTich.value = Math.PI * r * r;
}
function timMinMax(ds)
{
	n=ds.length;
	for(i = 0;i<n;i++)
	{
		ds = ds.replace(" ","");
	}
	txtDaySo.value = ds;
	n=ds.length;
	min = Number(ds[0]);
	for(i = 0;i<n;i++)
	{
		if (Number(ds[i])<min)
			min = Number(ds[i]);
	}
	txtMin.value = min;
	max = Number(ds[0]);
	for(i = 0;i<n;i++)
	{
		if (Number(ds[i])>max)
			max = Number(ds[i]);
	}
	txtMax.value = max;
}
function tinhTong(n)
{
	if (n>0)
	{
		var tong = 0;
		for (i=1;i<=n;i++)
		{
			tong += i;
		}
		return tong;
	}
	else
	{
		alert("Bạn hãy nhập n > 0");
	}
}
function giaiThua(n)
{
	var kq = 1;
	for (i = 1; i <= n; i++)
	{
		kq *= i;
	}
	return kq;
}
function ktChanLe(n)
{
	if (n%2==0)
		alert("Số chẵn");
	else
		alert("Số lẻ");
}
function timUCLN(a,b)
{
	var temp;
	if (b==0)
		return a;
	else
		return timUCLN(b,a%b);
}
function timBCNN(a,b)
{
	return a * b / timUCLN(a,b);
}

function giaiPTb1(a,b)
{
	if (a==0)
		if (b!=0)
			alert("Vô nghiệm");
		else
			alert("Vô số nghiệm");
	else
		x1.value = -b/a;	
}

function giaiPTb2(a,b,c)
{
	if (a==0)
		giaiPTb1(b,c);
	else //a!=0
	{
		var delta = b * b - (4 * a * c);
		if (delta <0)
			alert("Vô nghiệm");
		else 
		{
			if (delta ==0)
				x1.value = x2.value = -b/2/a;
			else
			{
				x1.value = -b-Math.sqrt(delta)/2/a;
				x2.value = -b+Math.sqrt(delta)/2/a;
			}
		}
	}
}
function timMinMax(ds)
{
	n=ds.length;
	for(i = 0;i<n;i++)
	{
		ds = ds.replace(","," ");
	}
	for(i = 0;i<n;i++)
	{
		ds = ds.replace("  "," ");
	}
	txtDaySo.value = ds;
	var list = ds.split(" ")
	min = Number(list[0]);
	for (i=0;i<list.length;i++)
	{
		if (min>Number(list[i]))
			min = Number(list[i]);
	}
	txtMin.value = min;
	max = Number(list[0]);
	for (i=0;i<list.length;i++)
	{
		if (max<Number(list[i]))
			max = Number(list[i]);
	}
	txtMax.value = max;
}