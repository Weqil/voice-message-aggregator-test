import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailsTableItem } from './mails-table-item';

describe('MailsTableItem', () => {
  let component: MailsTableItem;
  let fixture: ComponentFixture<MailsTableItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MailsTableItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MailsTableItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
